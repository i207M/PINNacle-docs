# Module PINNacle.src.utils.callbacks

## Classes

`LossCallback(verbose=False)`
: Callback base class.

    Attributes:
        model: instance of ``Model``. Reference of the model being trained.

    ### Ancestors (in MRO)

    * deepxde.callbacks.Callback

    ### Methods

    `on_epoch_end(self)`
    :   Called at the end of every epoch.

    `on_train_begin(self)`
    :   Called at the beginning of model training.

    `on_train_end(self)`
    :   Called at the end of model training.

`PlotCallback(log_every=None, verbose=False, fast=False)`
: Callback base class.

    Attributes:
        model: instance of ``Model``. Reference of the model being trained.

    ### Ancestors (in MRO)

    * deepxde.callbacks.Callback

    ### Methods

    `on_epoch_end(self)`
    :   Called at the end of every epoch.

    `on_train_begin(self)`
    :   Called at the beginning of model training.

    `on_train_end(self)`
    :   Called at the end of model training.

    `plot(self, save_path)`
    :

`TesterCallback(log_every=100, verbose=True, fRMSE_param={'enable': True, 'iLow': 5, 'iHigh': 13, 'calc_every': 2000})`
: Callback base class.

    Attributes:
        model: instance of ``Model``. Reference of the model being trained.

    ### Ancestors (in MRO)

    * deepxde.callbacks.Callback

    ### Methods

    `frmse_calc(self, y)`
    :

    `frmse_init(self)`
    :

    `on_epoch_end(self)`
    :   Called at the end of every epoch.

    `on_train_begin(self)`
    :   Called at the beginning of model training.

    `on_train_end(self)`
    :   Called at the end of model training.
