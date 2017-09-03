
export const SIMPLE_SEARCH_CLUB = "SIMPLE_SEARCH_CLUB";
export const TOGGLE_VIBE_FILTER = "TOGGLE_VIBE_FILTER";
export const TOGGLE_CATEGORY_FILTER = "TOGGLE_CATEGORY_FILTER";

export function simpleSearchClub(data: array) {
  return {
    type: SIMPLE_SEARCH_CLUB,
    payload: data
  };
}

export function toggleCategoryFilter(category: string) {
  return {
    type: TOGGLE_CATEGORY_FILTER,
    payload: category
  }
}

export function toggleVibeFilter(vibe: string) {
  return {
    type: TOGGLE_VIBE_FILTER,
    payload: vibe
  }
}
