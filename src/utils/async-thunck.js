export const searchByBinNumber = creatAsyncThunk("clonecard/searchByBin",
    async (binNumber: string , thunkApi) => {
        try {
            const card = await getProductOfferingsAPI(binNumber);
            return card
        } catch (error: any) {
            return thunkApi.rejectWithValue(
                error.message || "Error fetching Bin deatails"
            )
        }
    }
)

export const getProductOfferingsAPI = async (binNumber : string) =>{
    let url =""
    if(binNumber){
        url += `?binNumber=${binNumber}`
    }
    try{
        const data = await apiRequest(url, "GET", "content-type":"application/json")
        return data || []
    }catch(error: any){
        throw new Error("Error")
    }
}