Module PINNacle-yaojc.fbpinns.shared_modules.multiprocess
=========================================================
Created on Wed Mar 10 15:10:09 2021

@author: bmoseley

Classes
-------

`Pool(processes=1)`
:   Multiprocessing pool for running a function across multiple workers.
    Analogous to multiprocessing.Pool except that it also passes the process id to the target function as the first argument.
    
    Create pool, processes is number of processes

    ### Methods

    `starmap(self, func, iterable)`
    :   Analogous to multiprocessing.Pool.starmap, except that the process id is also passed as the first arugment to func,
        i.e. computes func(ip, *iterable)