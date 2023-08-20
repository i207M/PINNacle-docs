# Module PINNacle.src.optimizer.multiadam

## Functions

`sadam(params: List[torch.Tensor], grads: List[List[torch.Tensor]], exp_avgs: List[List[torch.Tensor]], exp_avg_sqs: List[List[torch.Tensor]], max_exp_avg_sqs: List[List[torch.Tensor]], agg_exp_avg: List[torch.Tensor], agg_exp_avg_sqs: List[torch.Tensor], state_steps: List[int], *, amsgrad: bool, beta1: float, beta2: float, lr: float, weight_decay: float, eps: float, maximize: bool, group_weights: torch.Tensor, agg_momentum: bool, agg_beta1: float, agg_beta2: float)`
: Functional API that performs MultiAdam algorithm computation.

    See :class:`~torch.optim.Adam` for details.

## Classes

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

`ParamScheduler(epochs=20000, lr_scheduler=None, betas_scheduler=None, group_weights_scheduler=None, default_lr=0.001, default_betas=(0.99, 0.99), default_group_weights=(0.5, 0.5))`
:

    ### Methods

    `betas(self)`
    :

    `group_weights(self)`
    :

    `lr(self)`
    :

    `step(self, losses, grouped_losses)`
    :
