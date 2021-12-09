import React from "react";
import { useParams } from 'react-router'
import { Link } from "react-router-dom";

export default function Challenge() {

    const params = useParams()
    console.log(params)

    switch (params.challengename) {
        case 'pressFiveTimes':
            console.log('pressFiveTimes');
            return (
                <div>
                    <Link to={'/planet-map'}>Exit</Link>
                    <h1>PressFiveTimes</h1>

                    <Link to={`/planet-map/${params.id}/challenge/win`}>WIN</Link>
                </div>
            )


        case 'pressFiveSec':
            console.log('pressFiveSec');
            return (
                <div>
                    <Link to={'/planet-map'}>Exit</Link>
                    <h1>PressFiveSec</h1>

                    <Link to={`/planet-map/${params.id}/challenge/win`}>WIN</Link>
                </div>
            )

        case '----':
            console.log('----');
            return (
                <div>
                    <Link to={'/planet-map'}>Exit</Link>
                    <h1>----</h1>

                    <Link to={`/planet-map/${params.id}/challenge/win`}>WIN</Link>
                </div>
            )

        case '1':
            console.log('1');
            return (
                <div>
                    <Link to={'/planet-map'}>Exit</Link>
                    <h1>1</h1>

                    <Link to={`/planet-map/${params.id}/challenge/win`}>WIN</Link>
                </div>
            )

        case '2':
            console.log('2');
            return (
                <div>
                    <Link to={'/planet-map'}>Exit</Link>
                    <h1>2</h1>

                    <Link to={`/planet-map/${params.id}/challenge/win`}>WIN</Link>
                </div>
            )

        case '3':
            console.log('3');
            return (
                <div>
                    <Link to={'/planet-map'}>Exit</Link>
                    <h1>3</h1>

                    <Link to={`/planet-map/${params.id}/challenge/win`}>WIN</Link>
                </div>
            )

        case '4':
            console.log('4');
            return (
                <div>
                    <Link to={'/planet-map'}>Exit</Link>
                    <h1>4</h1>

                    <Link to={`/planet-map/${params.id}/challenge/win`}>WIN</Link>
                </div>
            )

        case '5':
            console.log('5');
            return (
                <div>
                    <Link to={'/planet-map'}>Exit</Link>
                    <h1>5</h1>

                    <Link to={`/planet-map/${params.id}/challenge/win`}>WIN</Link>
                </div>
            )

        case '6':
            console.log('6');
            return (
                <div>
                    <Link to={'/planet-map'}>Exit</Link>
                    <h1>6</h1>

                    <Link to={`/planet-map/${params.id}/challenge/win`}>WIN</Link>
                </div>
            )

        case '7':
            console.log('7');
            return (
                <div>
                    <Link to={'/planet-map'}>Exit</Link>
                    <h1>7</h1>

                    <Link to={`/planet-map/${params.id}/challenge/win`}>WIN</Link>
                </div>
            )

        case '8':
            console.log('8');
            return (
                <div>
                    <Link to={'/planet-map'}>Exit</Link>
                    <h1>8</h1>

                    <Link to={`/planet-map/${params.id}/challenge/win`}>WIN</Link>
                </div>
            )
        default:
            console.log('default')

    }
}
