import React from 'react'

export const VoteVenuesView = ({venues, participants, addParticipant,sendVote}) => {
  const votes = [0, 0, 0]
  participants.map(participant => {
    votes[participant.venueIndex] += 1
  })
  let highestVotation = votes[0]
  votes.map((item) =>{
    if (item > highestVotation){
      highestVotation = item
    }
  })
  return (
    <div>
      <table className='vote-toll'>
        <thead className='vote-toll__venues'>
          <tr>
            <th>Participants</th>
            {venues.map((item,index) => {
              return (
                <th className={`${votes[index] === highestVotation ? 'winner': ''}`}>
                  {item.venue.name}
                  <span>
                    {item.venue.categories[0].name}
                  </span>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, indexP) => {
            return (
              <tr>
                <td>
                  <input type='text' />
                </td>
                {venues.map((_, indexV) => {
                  return (
                    <td className={`${votes[indexV] === highestVotation ? 'winner': ''}`}>
                      <input
                        type='radio'
                        checked={participant.venueIndex === indexV}
                        onChange={ e => sendVote(indexP, indexV)} 
                        />
                    </td>)
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={addParticipant}>Add Participant</button>
    </div>
  );
}