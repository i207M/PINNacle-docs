# Usage

Here you can find the instructions to use PINNacle.

## Define a PDE system

First, you need to define a PDE system. We have provided 20+ cases across many different fields in the `PINNacle.src.pde` module. For example, to define one of the Poisson equation cases, `Poisson2D-C`, you can use the `Poisson2D_Classic` class:

```python
from src.pde.poisson import Poisson2D_Classic

pde = Poisson2D_Classic()
```

Many PDE problems have parameters that can be changed. For example, the `Poisson2D-C` case has a parameter `scale` that changes the scale of the domain. You can change the value of this parameter as follows:

```python
pde = Poisson2D_Classic(scale=8)
```

You can also define your own PDE problem by subclassing the `BasePDE` class. See [this page](/pde/create) for more details.

## Define a neural network

Next, you need to define a neural network. We have provided a few neural network architectures in the `PINNacle.src.model` module. But you can also define your own neural network architecture as long as it is a subclass of the `torch.nn.Module` class. For example, to define a fully-connected neural network with 5 hidden layers, you can use the one provided by `DeepXDE`:

```python
import deepxde as dde

net = dde.nn.FNN([2] + [100] * 5 + [1], "tanh", "Glorot normal")
```

<!-- ### Define a loss function

Sometimes you may want to use a custom loss function instead of the default one (L2 loss), or you may want to use a weighted loss function. You can define a custom loss function as follows: -->

## Define an optimizer

Then, you need to define an optimizer. We have provided a few optimizers in the `PINNacle.src.optimizer` module. But you can also define your own optimizer as long as it is a subclass of the `torch.optim.Optimizer` class. For example, to use the baseline Adam optimizer, you can use the one provided by PyTorch:

```python
import torch

opt = torch.optim.Adam(net.parameters(), lr=1e-3)
```

## Assemble the problem

Now, you can assemble the problem by using the `create_model` method of the PDE class:

```python
model = pde.create_model(net)
model.compile(opt)  # Compile the model with the optimizer
```

Sometimes you may want to use a weighted loss function. You can define the weights as follows:

```python
import numpy as np

loss_weights = np.array([1, 100, 100])
model = pde.create_model(net)
model.compile(opt, loss_weights=loss_weights)
```

## Prepare some callbacks

To monitor the training process, you can use callbacks. We have provided a few callbacks in the `PINNacle.src.utils.callbacks` module. But you can also define your own callback as long as it is a subclass of the `deepxde.callbacks.Callback` class. For example, to use the `TesterCallback` (calculates the error on ground-truth data), `LossCallback` (records and plots the loss history) and `PlotCallback` (plots the prediction periodically), you can use the following code:

```python
from src.utils.callbacks import TesterCallback, LossCallback, PlotCallback

callbacks = [
    TesterCallback(log_every=100),
    PlotCallback(log_every=1000),
    LossCallback(),
]
```

## Train the model

At this time, you can train the model by calling the `train` method of the model. For example, to train the model for 10000 epochs, you can use the following code:

```python
model.train(iterations=10000, display_every=100, model_save_path='runs/experiment')
```

And you can use the results in the `runs` folder.

## Submit and run a task

We provide a more convenient way to submit and run training tasks on multiple GPUs. . You can use the `Trainer` class to manage the training tasks. For example, to train the model for 10000 epochs, you can use the following code:

```python
from trainer import Trainer

if __name__ == "__main__":
    # Trainer(name, device)
    trainer = Trainer("experiment", device="0")
    trainer.add_task(
        # Use a function to avoid the model being compiled before the training starts
        lambda: model, {
            "iterations": 10000,
            "display_every": 100,
            "callbacks": callbacks,
        }
    )

    # Backup the source code and setup the random seed
    trainer.setup(__file__, seed=42)
    # Set the number of times to repeat the training
    trainer.set_repeat(5)
```

To run the training tasks, you can use the following code:

```python
trainer.train_all()
trainer.summary()
```

For more advanced usage, please refer to `benchmark.py`.

## Full code

```python
import deepxde as dde
import numpy as np
import torch
from src.pde.poisson import Poisson2D_Classic
from src.utils.callbacks import TesterCallback, LossCallback, PlotCallback
from trainer import Trainer

if __name__ == "__main__":
    pde = Poisson2D_Classic()
    net = dde.nn.FNN([2] + [100] * 5 + [1], "tanh", "Glorot normal")
    opt = torch.optim.Adam(net.parameters(), lr=1e-3)

    loss_weights = np.array([1, 100, 100])
    model = pde.create_model(net)
    model.compile(opt, loss_weights=loss_weights)

    callbacks = [
        TesterCallback(log_every=100),
        PlotCallback(log_every=1000),
        LossCallback(),
    ]

    # Train without submitting a task
    # model.train(iterations=10000, display_every=100, model_save_path='runs/experiment')

    # Train with submitting a task
    trainer = Trainer("experiment", device="0")
    trainer.add_task(
        lambda: model,
        {
            "iterations": 10000,
            "display_every": 100,
            "callbacks": callbacks,
        },
    )

    trainer.setup(__file__, seed=42)
    trainer.set_repeat(5)
    trainer.train_all()
    trainer.summary()
```
