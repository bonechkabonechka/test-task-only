import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../../types/timeline';
import timelineData from '../../assets/db/db.json';

interface CategoriesState {
  categories: Category[];
  currentCategory: Category | null;
  selectedIndex: number;
}

const { categories } = timelineData;
const [firstCategory] = categories;

const initialState: CategoriesState = {
  categories,
  currentCategory: firstCategory ?? null,
  selectedIndex: 0,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, { payload }: PayloadAction<Category>) => {
      state.currentCategory = payload;
      const index = state.categories.findIndex(({ id }) => id === payload.id);
      state.selectedIndex = index !== -1 ? index : state.selectedIndex;
    },

    goToNextCategory: state => {
      const nextIndex = (state.selectedIndex + 1) % state.categories.length;
      state.selectedIndex = nextIndex;
      state.currentCategory = state.categories[nextIndex] ?? null;
    },

    goToPreviousCategory: state => {
      const prevIndex =
        state.selectedIndex > 0
          ? state.selectedIndex - 1
          : state.categories.length - 1;
      state.selectedIndex = prevIndex;
      state.currentCategory = state.categories[prevIndex] ?? null;
    },

    goToCategoryByIndex: (state, { payload }: PayloadAction<number>) => {
      const index = Math.max(0, Math.min(payload, state.categories.length - 1));
      state.selectedIndex = index;
      state.currentCategory = state.categories[index] ?? null;
    },
  },
});

export const {
  selectCategory,
  goToNextCategory,
  goToPreviousCategory,
  goToCategoryByIndex,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
