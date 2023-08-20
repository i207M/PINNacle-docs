Module PINNacle-yaojc.fbpinns.active_schedulers
===============================================
Created on Wed Apr  7 14:24:20 2021

@author: bmoseley

Classes
-------

`AllActiveSchedulerND(N_STEPS, D)`
:   All models are active all of the time

    ### Ancestors (in MRO)

    * PINNacle-yaojc.fbpinns.active_schedulers._ActiveScheduler

    ### Class variables

    `name`
    :

`LineActiveSchedulerND(N_STEPS, D, point, iaxis)`
:   Slowly expands outwards from a line in the domain (in x units)

    ### Ancestors (in MRO)

    * PINNacle-yaojc.fbpinns.active_schedulers._SubspacePointActiveSchedulerND
    * PINNacle-yaojc.fbpinns.active_schedulers._ActiveScheduler

    ### Class variables

    `name`
    :

`ManualActiveSchedulerND(N_STEPS, D, actives)`
:   The active array is generated is hard-coded

    ### Ancestors (in MRO)

    * PINNacle-yaojc.fbpinns.active_schedulers._ActiveScheduler

    ### Class variables

    `name`
    :

`PlaneActiveSchedulerND(N_STEPS, D, point, iaxes)`
:   Slowly expands outwards from a plane in the domain (in x units)

    ### Ancestors (in MRO)

    * PINNacle-yaojc.fbpinns.active_schedulers._SubspacePointActiveSchedulerND
    * PINNacle-yaojc.fbpinns.active_schedulers._ActiveScheduler

    ### Class variables

    `name`
    :

`PointActiveSchedulerND(N_STEPS, D, point)`
:   Slowly expands outwards from a point in the domain (in x units)

    ### Ancestors (in MRO)

    * PINNacle-yaojc.fbpinns.active_schedulers._SubspacePointActiveSchedulerND
    * PINNacle-yaojc.fbpinns.active_schedulers._ActiveScheduler

    ### Class variables

    `name`
    :