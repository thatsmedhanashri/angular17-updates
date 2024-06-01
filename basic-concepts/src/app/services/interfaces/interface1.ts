import { InjectionToken } from "@angular/core"

export interface interface1_ {
    name: string,
    employeeId: number
}

export const interface1_def : interface1_ = {
    name: 'Dhanashri',
    employeeId: 1200
}

export const USER_INFO = new InjectionToken<interface1_>('USER_INFO',
    {
        providedIn:'root',
        factory: () => interface1_def
    }
)