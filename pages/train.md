## Trainer

This script provides a framework for training deep learning models using the DeepXDE library. It supports both single and multiple GPU devices and allows for the repetition of training tasks.

## Classes and Functions

### `class HookedStdout`

This class is used to redirect the standard output (`stdout`) and standard error (`stderr`) to a file.

#### `__init__(self, filename, stdout=None)`

Initializes a `HookedStdout` instance.

- `filename`: The name of the file to which the output will be written.
- `stdout`: The output stream to be hooked. If not provided, `sys.stdout` will be used.

#### `write(self, data)`

Writes `data` to both the original output stream and the file.

#### `flush(self)`

Flushes both the original output stream and the file.

### `train_process(data, save_path, device, seed)`

A function to train a model in a separate process.

- `data`: Serialized model and training arguments.
- `save_path`: Path to save the model and logs.
- `device`: The device to use for training (e.g., 'cuda:0').
- `seed`: The random seed for reproducibility.

### `class Trainer`

This class is used to manage and execute training tasks.

#### `__init__(self, exp_name, device)`

Initializes a `Trainer` instance.

- `exp_name`: The name of the experiment.
- `device`: The device(s) to use for training, provided as a comma-separated string (e.g., '0,1') or 'cpu'.

#### `set_repeat(self, repeat)`

Sets the number of times each task should be repeated.

- `repeat`: The number of repetitions.

#### `add_task(self, get_model, train_args)`

Adds a training task to the queue.

- `get_model`: A function that returns the model to be trained.
- `train_args`: The arguments to be passed to the `train` method of the model.

#### `setup(self, filename, seed)`

Sets up the experiment by creating necessary directories and saving the configuration.

- `filename`: The name of the script file.
- `seed`: The random seed for reproducibility.

#### `train_all(self)`

Trains all tasks in the queue. If multiple devices are available, tasks are trained in parallel.

#### `train_all_parallel(self)`

Trains all tasks in the queue in parallel, using multiple devices.

#### `summary(self)`

Generates a summary of the experiment.
