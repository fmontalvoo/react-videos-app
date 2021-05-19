import { InfiniteLoader, List } from 'react-virtualized';

const rowRenderer = ({ key }) => <p key={key}>Hola Hundo</p>;


const VideosList = ({ videosState, loadNextPage }) => {

    const isRowLoaded = ({ index }) => !!videosState?.data.videos[index]; // !! combierte el valor a booleano.

    const loadMoreRows = () => {
        loadNextPage();
    }

    return (
        <InfiniteLoader rowCount={3}
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
        >
            {({ onRowsRendered, registerChild }) => (
                <List onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    height={500}
                    width={700}
                    rowHeight={100}
                    rowCount={3}
                    rowRenderer={rowRenderer}
                >

                </List>
            )
            }
        </InfiniteLoader>
    );

}

export default VideosList;