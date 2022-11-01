class Singleton {
    private static instance: Singleton;

    private constructor() {
        // init
    }

    static getInstance() {
        if(!Singleton.instance) {
            Singleton.instance = Singleton
        }

        return Singleton.instance;
    }
}


export default Singleton;