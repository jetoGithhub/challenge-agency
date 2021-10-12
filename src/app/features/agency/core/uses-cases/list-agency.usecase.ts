import { Observable } from "rxjs";
import { RESTServices } from "src/app/core/entities/rest-services.entity";
import { AgencyEntity } from '../domain/angency.entity';

export const listAgencyUseCase = async (agencyServices: RESTServices<Observable<AgencyEntity[]>>) => {
    const response = await agencyServices.find().toPromise();
    if(response && response.length) {
        return [...response];
    }

    return [];
}