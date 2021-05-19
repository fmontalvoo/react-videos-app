import { InfiniteLoader, List } from 'react-virtualized';

import Video from './Video';



const VideosList = ({ videosState, loadNextPage, loading }) => {
    const rowRenderer = ({ index, key, parent, style }) => {
        let video = videosState?.data.videos[index];
        return (
            video ?
                <Video key={key} video={video} style={style} />
                : <p>Cargando...</p>
        );
    };

    const isRowLoaded = ({ index }) => !!videosState?.data.videos[index]; // !! combierte el valor a booleano.

    const loadMoreRows = loading ? () => { } : () => {
        loadNextPage();
    }

    let totalCount = videosState.data.nextPage ? videosState.data.videos.length + 3 : videosState.data.total;
    let videosCount = videosState.data.nextPage ? videosState.data.videos.length + 1 : videosState.data.total;

    return (
        <InfiniteLoader rowCount={totalCount}
            loadMoreRows={loadMoreRows}
            isRowLoaded={isRowLoaded}
            minimumBatchSize={1}
            threshold={2}
        >
            {({ onRowsRendered, registerChild }) => (
                <List onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    height={700}
                    width={500}
                    rowHeight={700}
                    rowCount={videosCount}
                    rowRenderer={rowRenderer}
                >

                </List>
            )
            }
        </InfiniteLoader>
    );

}

export default VideosList;