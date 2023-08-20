Module PINNacle-yaojc.fbpinns.shared_modules.helper
===================================================
Created on Wed Mar 10 15:10:09 2021

@author: bmoseley

Functions
---------

    
`recursive_list_map(f, l)`
:   Recursively map a function f to a list

Classes
-------

`DictToObj(copy=True, **kwargs)`
:   Convert a dictionary into a python object
    
    Input dictionary by values DictToObj(**dict)

`Timer(name=None, verbose=True)`
:   Simple timer context manager

`cache_x(eps=0.001, maxsize=100)`
:   Cache func return values, "isclose" inputs are seen as one input.
    Inputs are torch.tensors
    No maximum cache size (keeps growing)

    ### Methods

    `isclose(self, x, x_)`
    :