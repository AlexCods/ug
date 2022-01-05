import { Participant } from '../interfaces/summoner';


export const getParticipant = ( puuid: string, participants: Participant[] ): Participant => {

    const foundParticipant = participants.find( participant => participant.puuid === puuid );
    return foundParticipant!;

}