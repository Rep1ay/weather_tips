export class CurrentWeather {
    constructor(public name: string,
                public temp: number,
                public units: string,
                public icon: string,
                public humidity: string,
                public pressure: string,
            ) {
    }
}
