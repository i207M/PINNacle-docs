# Module PINNacle.src.optimizer

## Sub-modules

- PINNacle.src.optimizer.adam_lbfgs
- PINNacle.src.optimizer.lr_adaptor
- PINNacle.src.optimizer.multiadam
- PINNacle.src.optimizer.ntk

## Classes

`Adam_LBFGS(params, switch_epoch=10000, adam_param={'lr': 0.001, 'betas': (0.9, 0.999)}, lbfgs_param={'lr': 1, 'max_iter': 20})`
: Base class for all optimizers.

    .. warning::
        Parameters need to be specified as collections that have a deterministic
        ordering that is consistent between runs. Examples of objects that don't
        satisfy those properties are sets and iterators over values of dictionaries.

    Args:
        params (iterable): an iterable of :class:`torch.Tensor` s or
            :class:`dict` s. Specifies what Tensors should be optimized.
        defaults: (dict): a dict containing default values of optimization
            options (used when a parameter group doesn't specify them).

    ### Ancestors (in MRO)

    * torch.optim.optimizer.Optimizer

    ### Methods

    `step(self, closure=None)`
    :   Performs a single optimization step (parameter update).

        Args:
            closure (Callable): A closure that reevaluates the model and
                returns the loss. Optional for most optimizers.

        .. note::
            Unless otherwise specified, this function should not modify the
            ``.grad`` field of the parameters.

`LR_Adaptor(optimizer, loss_weight, num_pde, alpha=0.1, mode='max')`
: PINN callback for learning rate annealing algorithm of physics-informed neural networks.

    loss_weight - initial loss weights
    num_pde - the number of the PDEs (boundary conditions excluded)
    alpha - parameter of moving average
    mode - "max" (PINN-LA), "mean" (PINN-LA-2)

    ### Ancestors (in MRO)

    * torch.optim.optimizer.Optimizer

    ### Methods

    `step(self, closure)`
    :

`LR_Adaptor_NTK(optimizer, loss_weight, pde)`
: PINN callback for learning rate annealing algorithm of physics-informed neural networks.

    loss_weight - initial loss weights
    num_pde - the number of the PDEs (boundary conditions excluded)

    ### Ancestors (in MRO)

    * torch.optim.optimizer.Optimizer

    ### Methods

    `step(self, closure)`
    :

`MultiAdam(params, lr=0.001, betas=(0.99, 0.99), eps=1e-08, weight_decay=0, amsgrad=False, maximize=False, loss_group_idx=None, group_weights=None, agg_momentum=False, agg_betas=None, *, param_scheduler=None)`
: Base class for all optimizers.

    .. warning::
        Parameters need to be specified as collections that have a deterministic
        ordering that is consistent between runs. Examples of objects that don't
        satisfy those properties are sets and iterators over values of dictionaries.

    Args:
        params (iterable): an iterable of :class:`torch.Tensor` s or
            :class:`dict` s. Specifies what Tensors should be optimized.
        defaults: (dict): a dict containing default values of optimization
            options (used when a parameter group doesn't specify them).

    ### Ancestors (in MRO)

    * torch.optim.optimizer.Optimizer

    ### Methods

    `init_states(self)`
    :

    `step(self, closure)`
    :   Performs a single optimization step.

        Args:
            closure (callable, optional): A closure that reevaluates the model
                and returns the loss.
