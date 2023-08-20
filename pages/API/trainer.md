# Module PINNacle.trainer

## Functions

`train_process(data, save_path, device, seed)`
:

## Classes

`HookedStdout(filename, stdout=None)`
:

    ### Class variables

    `original_stdout`
    :

    ### Methods

    `flush(self)`
    :

    `write(self, data)`
    :

`Trainer(exp_name, device)`
:

    ### Methods

    `add_task(self, get_model, train_args)`
    :

    `set_repeat(self, repeat)`
    :

    `setup(self, filename, seed)`
    :

    `summary(self)`
    :

    `train_all(self)`
    :

    `train_all_parallel(self)`
    :
