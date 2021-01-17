import axios from 'axios';
import loggerInfo from "../logger/bunyan";
import { IGame } from '../interfaces';

export class GameService {
    private baseUrl = `https://ec.nintendo.com/api/US/en/search/sales?`;

    public async getAll(count = 30, offset = 0) {

        const url = this.baseUrl+`count=${count}&offset=${offset}`;
        
        try {
            const { data } = await axios.get(url);

            const games: IGame[] = data.contents.map((item:any) => {
                const game: IGame = {
                    name: item.formal_name,
                    membership: item.membership_required,
                    coverPicture: item.hero_banner_url,
                    keywords: item.rating_info.content_descriptors?.map((kw:any) => kw.name),
                    minimumAge: item.rating_info.rating.age
                }
                return game;
            })
            return { games, hasError: false };
        } catch (error) { 
            const message = `Error: ${error.name} Message: ${error.message} Status Code: ${error.status}`;
            loggerInfo.info(message);
            return {error: message, hasError: true};
        }

    }


}