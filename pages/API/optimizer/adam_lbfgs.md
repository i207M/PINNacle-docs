# Module PINNacle.src.optimizer.adam_lbfgs

## Classes

`Adam_LBFGS(params, switch_epoch=10000, adam_param={'lr': 0.001, 'betas': (0.9, 0.999)}, lbfgs_param={'lr': 1, 'max_iter': 20})`
:

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
