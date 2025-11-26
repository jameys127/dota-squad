import RankTable from "../misc/RankTable"
import { useQuery } from "@tanstack/react-query";
import api from "../../api/api";
import { CircularProgress } from "@mui/material";
import RankMedal from "../../func/Rank";

const Home = () => {

  const {isPending, error, data} = useQuery({
    queryKey: ['player'],
    queryFn: async () => {
      const jameyID = 106197305;
      const maxID = 359878896;
      const gabeID = 141634806;

      const [jameyRes, maxRes, gabeRes] = await Promise.all([
        api.get(`api/players/${jameyID}`),
        api.get(`api/players/${maxID}`),
        api.get(`api/players/${gabeID}`),
      ]);
      return {
        jamey: jameyRes.data,
        max: maxRes.data,
        gabe: gabeRes.data,
      };
    }
  });

  if(isPending){
    return <div><CircularProgress /></div>
  }
  if(error){
    console.log("Wassup")
    return <p className="text-white">Error grabbing data</p>
  }
  if(!data){
    return <p className="text-white">No data found</p>
  }

  return (
    <div className="flex items-center justify-center p-3 h-full">
        <div className="flex flex-col w-1/2 h-full justify-center items-center gap-40">
          <h1 className="flex items-center text-white text-[2rem] font-[Cinzel] font-bold">Jamey&nbsp;-&nbsp;<img src={data.jamey.profile.avatarmedium} alt="avatar"/>&nbsp;{data.jamey.profile.personaname}&nbsp;-&nbsp;<img className="w-20" src={RankMedal(data.jamey.rank_tier)} alt="rank" /></h1>
          <h1 className="flex items-center text-white text-[2rem] font-[Cinzel] font-bold">Gabe&nbsp;-&nbsp;<img src={data.gabe.profile.avatarmedium} alt="avatar"/>&nbsp;{data.gabe.profile.personaname}&nbsp;-&nbsp;<img className="w-20" src={RankMedal(data.gabe.rank_tier)} alt="rank" /></h1>
          <h1 className="flex items-center text-white text-[2rem] font-[Cinzel] font-bold">Max&nbsp;-&nbsp;<img src={data.max.profile.avatarmedium} alt="avatar"/>&nbsp;{data.max.profile.personaname}&nbsp;-&nbsp;<img className="w-20" src={RankMedal(data.max.rank_tier)} alt="rank" /></h1>
        </div>
        <div className="justify-center items-center w-1/2 h-full flex flex-col">
            <RankTable />
        </div>
    </div>
  )
}

export default Home
