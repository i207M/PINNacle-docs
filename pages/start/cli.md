# Command Line Interface

You can use the CLI to run a single case or multiple cases with different settings. Here is the usage of `benchmark.py`:

```
optional arguments:
  -h, --help            show this help message and exit
  --name NAME
  --device DEVICE
  --seed SEED
  --hidden-layers HIDDEN_LAYERS
  --loss-weight LOSS_WEIGHT
  --lr LR
  --iter ITER
  --log-every LOG_EVERY
  --plot-every PLOT_EVERY
  --repeat REPEAT
  --method METHOD
```

We are actively iterating the CLI design to make it easy to use. If you have any suggestions, please feel free to open an issue.

## Multi-GPU Training

One can use `--device` to specify the GPU devices to use. If more than one GPU is specified, the program will run multiple experiments in parallel.
