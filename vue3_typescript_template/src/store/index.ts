export const storeObj = { //* vuex
    state() {
        return {
            //* ovde definises state
            counter: 0
        }
    },
    getters: {
        counterGetter(state: any, getters: any) { //* getters arg su ostali getteri definisani ovde - korisno kad ti za izracunavanje jednog gettera treba vrednost drugog 
            return state.counter * 2
        }
    },
    mutations: {
        addVuexHandler(state: any, payload: number) {
            state.counter = state.counter + payload
        },
        subtractVuexHandler(state: any, payload: number) {
            state.counter = state.counter - payload
        }
    },
    actions: {
        respAddVuexHandler(context:any) {
            let randomNum: number = Math.floor(Math.random() * 10)
            setTimeout(() => { 
                context.commit('addVuexHandler', randomNum)
            }, 500);
        }
    }
}