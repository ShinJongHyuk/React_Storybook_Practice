import {create} from 'zustand'

const useReviewStore = create((set) => ({
    ReviewData : [],
    setReviewData : (data) => set(() => ({ReviewData: data}))
}))

export default useReviewStore