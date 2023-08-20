# Module PINNacle.src.model.fnn

## Classes

`FNN(layer_sizes, activation, kernel_initializer)`
: Fully-connected neural network.

    Initializes internal Module state, shared by both nn.Module and ScriptModule.

    ### Ancestors (in MRO)

    * deepxde.nn.pytorch.nn.NN
    * torch.nn.modules.module.Module

    ### Class variables

    `call_super_init: bool`
    :

    `dump_patches: bool`
    :

    `training: bool`
    :

    ### Methods

    `forward(self, inputs) ‑> Callable[..., Any]`
    :   Defines the computation performed at every call.

        Should be overridden by all subclasses.

        .. note::
            Although the recipe for forward pass needs to be defined within
            this function, one should call the :class:`Module` instance afterwards
            instead of this since the former takes care of running the
            registered hooks while the latter silently ignores them.

`PFNN(layer_sizes, activation, kernel_initializer, split_mask=None)`
: Parallel fully-connected network that uses independent sub-networks for each
network output.

    Args:
        layer_sizes: A nested list that defines the architecture of the neural network
            (how the layers are connected). If `layer_sizes[i]` is an int, it represents
            one layer shared by all the outputs; if `layer_sizes[i]` is a list, it
            represents `len(layer_sizes[i])` sub-layers, each of which is exclusively
            used by one output. Note that `len(layer_sizes[i])` should equal the number
            of outputs. Every number specifies the number of neurons in that layer.

    Initializes internal Module state, shared by both nn.Module and ScriptModule.

    ### Ancestors (in MRO)

    * deepxde.nn.pytorch.nn.NN
    * torch.nn.modules.module.Module

    ### Class variables

    `call_super_init: bool`
    :

    `dump_patches: bool`
    :

    `training: bool`
    :

    ### Methods

    `forward(self, inputs) ‑> Callable[..., Any]`
    :   Defines the computation performed at every call.

        Should be overridden by all subclasses.

        .. note::
            Although the recipe for forward pass needs to be defined within
            this function, one should call the :class:`Module` instance afterwards
            instead of this since the former takes care of running the
            registered hooks while the latter silently ignores them.
