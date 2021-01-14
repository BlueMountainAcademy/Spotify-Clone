export const initialState = {
user: null,
playlists: [],
playing: false,
item: null,
//token: 'BQDY12f7DOdsKgRo6qQWVyUszUrr0tJxCrGYa5Ol3p3D39gsqSCE1jjy_FSFK4UElVnzl20MrQhBV5zG_EwJYDqlfnOWCId9m5w9ReknRGxnJp5g55ydVC-eLUFRHlMzkCSr55r5Z7z8Hf7Zx2UiXKlBg0kMtkhqDxzd1DkFiNjE8PoM',
};

const reducer = (state, action) => {
console.log(action);

switch(action.type) {
    case 'SET_USER':
       return {
           ...state,
            user: action.user
       }

       case 'SET_TOKEN':
           return {
               ...state,
               token: action.token
           };

           case 'SET_PLAYLISTS':
               return {
                   ...state,
                   playlists: action.playlists,
               };

               case "SET_DISCOVER_WEEKLY":
                   return{
                       ...state,
                       discover_weekly: action.discover_weekly,
                   }

       default:
           return state;
}
};

export default reducer;