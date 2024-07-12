import {ICar} from "../interfaces/carinterface";
import {IRes} from "../types/resType";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars.base),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.cars.base, data),
}

export {
    carService,
}