import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';

export function Effects(props: { sourceId: string }) {
    const [lastMessage, setLastMessage] = useState(-1);

    useEffect(() => {
        setLastMessage(-1);
        subscribe(props.sourceId, setLastMessage);

        return () => {
            unsubscribe(props.sourceId, setLastMessage);
        };
    }, [props.sourceId]);

    return (
        <h1>
            {props.sourceId}: {lastMessage}
        </h1>
    );
}
