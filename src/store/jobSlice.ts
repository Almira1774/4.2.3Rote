import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";

export type JobProps = {
    id: number;
    name: string;
    company_name: string;
    about_company?:string;
    city: string;
    salary: string;
    experience?: string;
    published_at?: string;
    short_description?: string;
    description?:string;
    space: string;
    skills?: string[];




}
export type JobSliceType = {
    jobs: JobProps[];
    errorMessage: 'Ошибка сервера' | null;
    errorSingleMessage:'Ошибка сервера' | null;
    status: string;
    singleStatus: string;
    selectedSkills: string[];
    selectedCompany: string;
    currentPage: number;
    totalPages:number | null;
    job: JobProps | null;

}

const myInitialState: JobSliceType = {
    jobs: [],
    errorMessage: null,
    errorSingleMessage:null,
    status: '',
    singleStatus :"",
    selectedSkills: ['JavaScript', 'React', 'Redux', 'Python'],
    selectedCompany: '',
    currentPage: 1,
    totalPages :null,
    job: null,

}


export const fetchVacancies = createAsyncThunk('jobs/fetchVacancies', async (city: string , { getState, rejectWithValue }) => {
    const state = getState() as { jobs: typeof myInitialState };
    const skills = state.jobs.selectedSkills.join(',');
    const search = state.jobs.selectedCompany.trim();
    const page = state.jobs.currentPage;
    const queryParams = [];
    let url = 'https://kata-jobs.onrender.com/api/jobs';

    try {
        if(city){
            queryParams.push(`city=${city}`)
        }
        
        if (skills.length > 0) {
            queryParams.push(`skills=${skills}`)
        }
        if (search.length > 0) {
            queryParams.push(`search=${search}`)
        }

        queryParams.push(`page=${page}&limit=10`);

        if (queryParams.length > 0) {
            url = `${url}?${queryParams.join('&')}`
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Server Error');
        }

        const data = await response.json();
        return data;
    }

    catch (error) {
        return rejectWithValue(error);
    }


})
export const fetchSingleVacancy = createAsyncThunk('jobs/fetchSingleVacancy',
    async ( id :string,{rejectWithValue }) => {
        

        let url = `https://kata-jobs.onrender.com/api/jobs/${id}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Server Error');
            }

            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue(error);
        }

    })


export const JobSlice = createSlice({
    name: 'jobs',
    initialState: myInitialState,
    reducers: {
        addTagBySkills(state, action) {
            const newSkill = action.payload

if(!state.selectedSkills.includes(newSkill)){
 state.selectedSkills.unshift(action.payload);
}
           
            state.currentPage = 1;
        },
        removeTagBySkills(state, action) {
            state.selectedSkills = state.selectedSkills.filter(tag => tag !== action.payload);
            state.currentPage = 1;
        },
       
        addSelectedCompany(state, action) {
            state.selectedCompany = action.payload;
            state.currentPage = 1;

        },
        changePage(state, action) {
            state.currentPage = action.payload
        },
       

    },
    extraReducers: (builder) => {
        builder.addCase(fetchVacancies.pending, (state) => {
            state.status = 'loading';
            state.errorMessage = null;
        })
            .addCase(fetchVacancies.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.jobs = action.payload.jobs as JobProps[];
                state.totalPages = action.payload.pagination.totalPages;
            })
            .addCase(fetchVacancies.rejected, (state) => {
                state.status = 'rejected';
                state.errorMessage = 'Ошибка сервера';
            }

            ).addCase(fetchSingleVacancy.pending, (state) => {
            state.singleStatus = 'loading';
            state.errorSingleMessage = null;
        })
            .addCase(fetchSingleVacancy.fulfilled, (state, action) => {
                state.singleStatus = 'loaded';
                state.job = action.payload.job as JobProps;
            })
            .addCase(fetchSingleVacancy.rejected, (state) => {
                state.singleStatus = 'rejected';
                state.errorSingleMessage = 'Ошибка сервера';
            }

            )
    }
})
export const { addTagBySkills,
    removeTagBySkills,
    addSelectedCompany,
    changePage, } = JobSlice.actions;

export default JobSlice.reducer;