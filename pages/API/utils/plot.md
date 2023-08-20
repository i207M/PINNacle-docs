# Module PINNacle.src.utils.plot

## Functions

`mean_squared_error_outlier(y_true, y_pred)`
: MSE calculator.

`plot_3dheatmap(x, y, z, values, path, time_split=6, title='', xlabel='x', ylabel='y', zlabel='z', no_interpolate=False)`
:

`plot_distribution(data, xlabel, ylabel, path, title='')`
: Plot the distribution of data.

`plot_distribution_log(data, xlabel, ylabel, path, title='')`
: Plot the distribution of data with log-scale.

`plot_heatmap(x, y, z, path=None, vmin=None, vmax=None, num=100, title='', xlabel='x', ylabel='y', show=False, pde=None)`
: Plot heat map for a 3-dimension data

`plot_lines(data, path, xlabel='', ylabel='', labels=None, xlog=False, ylog=False, title='', sort_=False)`
: Lines

`plot_loss_history(pde, loss_history, output_dir, loss_weights=None)`
: Plot the training and testing loss history.

    Note:
        You need to call ``plt.show()`` to show the figure.

    Args:
        loss_history: ``LossHistory`` instance. The first variable returned from
            ``Model.train()``.
        fname (string): If `fname` is a string (e.g., 'loss_history.png'), then save the
            figure to the file of the file name `fname`.

`plot_points(data, xlabel, ylabel, path)`
: Scatter points

`plot_state(pde, train_state, output_dir, is_best=False, fast=False)`
: Plot the current/best result of the smallest training loss.

`plot_streamline(x, y, u, v, path=None, vmin=None, vmax=None, title='', xlabel='x', ylabel='y', show=False)`
: Plot heat map for a 3-dimension data
