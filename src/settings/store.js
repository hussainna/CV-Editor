import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state for the form data
const initialState = {
  name: 'Hussain Alasdy',
  job: 'Full Stack Developer',
  phone: '96434567',
  email: 'hiseenabd@gmail.com',
  location: 'Baghdad',
  socialMedia: [
    {name:"facebook",link:"www.facebook.com"},
    {name:"instagram",link:"www.instagram.com"},
    {name:"linkedin",link:"www.linkedin.com"},

  ],
  summary: 'Resourceful Developer with 11 years of experience in designing and developing user interfaces, testing and training employees. Skilled at utilizing a wide variety of tools and programs to provide effective applications.',
  education:[{
    name:"Wasit Unversity",
    degry:"Bachelor of Computer Science",
    location:"Kut City",
    from:"Aug, 2020",
    to:"Jul, 2024"
  },],
  experiences: [
    { id: Date.now(), companyTitle: 'Digital Projects', companyJob: 'Full Stack Developer', companyDescription: 'Digital Projects is a global software company that offers user interface UI development tools and components for a range of developer applications across all platforms.', companyList: 'Created and maintained 10 web applications for numerous national and foreign clients.Created and maintained 10 web applications for numerous national and foreign clients.Created and maintained 10 web applications for numerous national and foreign clients.Created and maintained 10 web applications for numerous national and foreign clients.', companyDateFrom: '', companyDateTo: '' },
    { id: Date.now(), companyTitle: 'Digital Projects', companyJob: 'Full Stack Developer', companyDescription: 'Digital Projects is a global software company that offers user interface UI development tools and components for a range of developer applications across all platforms.', companyList: 'Created and maintained 10 web applications for numerous national and foreign clients.Created and maintained 10 web applications for numerous national and foreign clients.Created and maintained 10 web applications for numerous national and foreign clients.Created and maintained 10 web applications for numerous national and foreign clients.', companyDateFrom: '', companyDateTo: '' },

    { id: Date.now(), companyTitle: 'Digital Projects', companyJob: 'Full Stack Developer', companyDescription: 'Digital Projects is a global software company that offers user interface UI development tools and components for a range of developer applications across all platforms.', companyList: 'Created and maintained 10 web applications for numerous national and foreign clients.Created and maintained 10 web applications for numerous national and foreign clients.Created and maintained 10 web applications for numerous national and foreign clients.Created and maintained 10 web applications for numerous national and foreign clients.', companyDateFrom: '', companyDateTo: '' }
  ],
  skills: [{name:"HTML"},{name:"CSS"},{name:"JS"},{name:"REACT"}],
  soft: [{name:"Good Team Leader"},{name:"Best Team Leader"}],
  additional: [{name:"Public Speaking"},{name:"The Best Public Speaking"}],
  languages: [{name:"English"},{name:"Arabic"}],
};

// Create a slice for the form with actions and reducers
const formSlice = createSlice({
  name: 'form',
  initialState: JSON.parse(localStorage.getItem('formData')) || initialState,
  reducers: {
    setFormData: (state, action) => {
      // This merges the incoming payload with the existing state
      return { ...state, ...action.payload };
    },
    addNewForm: (state) => {
      // Ensure the experiences array is initialized
      if (!state.experiences) {
        state.experiences = [];
      }
      // Add a new empty form to the experiences array
      state.experiences.push({
        id: Date.now(),
        companyTitle: '',
        companyJob: '',
        companyDescription: '',
        companyList: '',
        companyDateFrom: '',
        companyDateTo: ''
      });
    },
    removeLastForm: (state) => {
      state.experiences.pop();

    },
    updateExperience: (state, action) => {
      const index = state.experiences.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.experiences[index] = action.payload;
      }
    },



    addNewSocialMediaForm: (state) => {
      // Ensure the experiences array is initialized
      if (!state.socialMedia) {
        state.socialMedia = [];
      }
      // Add a new empty form to the experiences array
      state.socialMedia.push({
        id: Date.now(),
        companyTitle: '',
        companyJob: '',
        companyDescription: '',
        companyList: '',
        companyDateFrom: '',
        companyDateTo: ''
      });
    },
    removeLastSocialMediaForm: (state) => {
      state.socialMedia.pop();

    },
    updateSocialMedia: (state, action) => {
      const index = state.socialMedia.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.socialMedia[index] = action.payload;
      }
    },


    addNewSkillsForm: (state) => {
      // Ensure the experiences array is initialized
      if (!state.skills) {
        state.skills = [];
      }
      // Add a new empty form to the experiences array
      state.skills.push({
        id: Date.now(),
        companyTitle: '',
        companyJob: '',
        companyDescription: '',
        companyList: '',
        companyDateFrom: '',
        companyDateTo: ''
      });
    },
    removeLastSkillsForm: (state) => {
      state.skills.pop();

    },
    updateSkills: (state, action) => {
      const index = state.skills.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.skills[index] = action.payload;
      }
    },

    addNewSoftForm: (state) => {
      // Ensure the experiences array is initialized
      if (!state.soft) {
        state.soft = [];
      }
      // Add a new empty form to the experiences array
      state.soft.push({
        id: Date.now(),
        companyTitle: '',
        companyJob: '',
        companyDescription: '',
        companyList: '',
        companyDateFrom: '',
        companyDateTo: ''
      });
    },
    removeLastSoftForm: (state) => {
      state.soft.pop();

    },
    updateSoft: (state, action) => {
      const index = state.soft.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.soft[index] = action.payload;
      }
    },


    addNewLanguagesForm: (state) => {
      // Ensure the experiences array is initialized
      if (!state.languages) {
        state.languages = [];
      }
      // Add a new empty form to the experiences array
      state.languages.push({
        id: Date.now(),
        companyTitle: '',
        companyJob: '',
        companyDescription: '',
        companyList: '',
        companyDateFrom: '',
        companyDateTo: ''
      });
    },
    removeLastLanguagesForm: (state) => {
      state.languages.pop();

    },
    updateLanguages: (state, action) => {
      const index = state.languages.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.languages[index] = action.payload;
      }
    },


    addNewAdditionalForm: (state) => {
      // Ensure the experiences array is initialized
      if (!state.additional) {
        state.additional = [];
      }
      // Add a new empty form to the experiences array
      state.additional.push({
        id: Date.now(),
        companyTitle: '',
        companyJob: '',
        companyDescription: '',
        companyList: '',
        companyDateFrom: '',
        companyDateTo: ''
      });
    },
    removeLastAdditionalForm: (state) => {
      state.additional.pop();

    },
    updateAdditional: (state, action) => {
      const index = state.additional.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.additional[index] = action.payload;
      }
    },


    addNewEducationForm: (state) => {
      // Ensure the experiences array is initialized
      if (!state.education) {
        state.education = [];
      }
      // Add a new empty form to the experiences array
      state.education.push({
        id: Date.now(),
        companyTitle: '',
        companyJob: '',
        companyDescription: '',
        companyList: '',
        companyDateFrom: '',
        companyDateTo: ''
      });
    },
    removeLastEducationForm: (state) => {
      state.education.pop();

    },
    updateEducation: (state, action) => {
      const index = state.education.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.education[index] = action.payload;
      }
    },



  },
});

// Export the setFormData and addNewForm actions so they can be used in the component
export const { 
  setFormData, 
  addNewForm,
  removeLastForm,
  updateExperience,
  addNewSocialMediaForm,
  removeLastSocialMediaForm,
  updateSocialMedia,
  addNewSkillsForm,
  removeLastSkillsForm,
  updateSkills,
  addNewSoftForm,
  removeLastSoftForm,
  updateSoft,
  addNewLanguagesForm,
  removeLastLanguagesForm,
  updateLanguages,
  addNewAdditionalForm,
  removeLastAdditionalForm,
  updateAdditional,
  addNewEducationForm,
  removeLastEducationForm,
  updateEducation,



} = formSlice.actions;

// Create and export the Redux store
const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

// Subscribe to the store to persist data to localStorage
store.subscribe(() => {
  localStorage.setItem('formData', JSON.stringify(store.getState().form));
});

export default store;
