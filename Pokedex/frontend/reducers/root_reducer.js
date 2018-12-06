import {combineReducers} from 'redux'; 
import merge from 'lodash/merge'; 
import entitiesReducer from './entities_reducer'; 

const rootReducer = combineReducers({
  entities: entitiesReducer,
}); 

export default rootReducer; 