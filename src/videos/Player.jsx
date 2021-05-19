import { useRef, useEffect } from 'react';

import styled from 'styled-components';

// Reproductor de vide de api.video
import { PlayerSdk } from '@api.video/player-sdk';

let Iframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  top:0px;
  left:0px;
`;

const Player = ({ video }) => {
    let player = useRef(null);

    useEffect(
        () => {
            if (!player.current) {
                // Permite controlar el reproductor de video en el componente.
                player.current = new PlayerSdk(`#appPlayer-${video.id}`);
                player.current.mute();
                player.current.play();
                player.current.setLoop(true); // Reproduce el video en bucle.
            }
        },
        [video.id] // Escucha si hubo cambios con el id del video.
    );

    return (
        <Iframe
            id={`appPlayer-${video.id}`}
            title={video.title}
            src={`https://embed.api.video/vod/${video.remoteVideoId}`}
            width="100%"
            height="100%"
            scrolling="no"
            allowFullScreen={true}
            frameborder="0" />
    );
}

export default Player;