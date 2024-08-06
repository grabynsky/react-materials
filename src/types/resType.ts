import {AxiosResponse} from "axios";

export type IRes<T> = Promise<AxiosResponse<T>>

// export type ISetState<T> = Dispatch<SetStateAction<T>>