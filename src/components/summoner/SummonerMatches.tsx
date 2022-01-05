import { useSelector } from 'react-redux';
import { GlobalState } from '../../store/store';
import { MatchResume } from './MatchResume';


export const SummonerMatches = () => {

    const { matches } = useSelector(
		(state: GlobalState) => state.summoner
	);

    return (
        <div>
            {
                matches?.map( match => (
                    <MatchResume key={ match.metadata.matchId } match={ match } />
                ))
            }
        </div>
    )
}
