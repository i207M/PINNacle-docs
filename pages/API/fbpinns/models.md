Module PINNacle-yaojc.fbpinns.models
====================================
Created on Tue Mar  9 12:32:55 2021

@author: bmoseley

Functions
---------

    
`total_params(model)`
:   

Classes
-------

`BiFCN(N_INPUT, N_OUTPUT, N_HIDDEN, N_LAYERS)`
:   Parallel Fully connected network
    Nets: Solution, Parameter
    Input: *, 2 (Paremeter net takes the first two dim of input as input)
    Output: 1, 1
    
    Initializes internal Module state, shared by both nn.Module and ScriptModule.

    ### Ancestors (in MRO)

    * torch.nn.modules.module.Module

    ### Class variables

    `call_super_init: bool`
    :

    `dump_patches: bool`
    :

    `training: bool`
    :

    ### Methods

    `forward(self, x) ‑> Callable[..., Any]`
    :   Defines the computation performed at every call.
        
        Should be overridden by all subclasses.
        
        .. note::
            Although the recipe for forward pass needs to be defined within
            this function, one should call the :class:`Module` instance afterwards
            instead of this since the former takes care of running the
            registered hooks while the latter silently ignores them.

`FCN(N_INPUT, N_OUTPUT, N_HIDDEN, N_LAYERS)`
:   Fully connected network
    
    Initializes internal Module state, shared by both nn.Module and ScriptModule.

    ### Ancestors (in MRO)

    * torch.nn.modules.module.Module

    ### Class variables

    `call_super_init: bool`
    :

    `dump_patches: bool`
    :

    `training: bool`
    :

    ### Methods

    `forward(self, x) ‑> Callable[..., Any]`
    :   Defines the computation performed at every call.
        
        Should be overridden by all subclasses.
        
        .. note::
            Although the recipe for forward pass needs to be defined within
            this function, one should call the :class:`Module` instance afterwards
            instead of this since the former takes care of running the
            registered hooks while the latter silently ignores them.