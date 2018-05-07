const initialState = {
  ready: false,
  "isExample": false,
  "currentIndex": 0,
  "steps": {},
  "heading": "foo heading"
}
  
export function lessonStore(
  state: LessonStore = initialState,
  action: Action,
): LessonStore {

  switch (action.type) {
    // STORE_SWITCH
    default:
      return state
  }
}