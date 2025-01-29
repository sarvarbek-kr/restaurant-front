import { CssVarsProvider, Typography } from "@mui/joy";
import { Box, Container, Stack } from "@mui/material";
import CardOverflow from '@mui/joy/CardOverflow';
import Card from '@mui/joy/Card';
import AspectRatio from "@mui/joy/AspectRatio";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

/*  REDUX SLICE & SELECTOR   */
const topUsersRetriever = createSelector(retrieveTopUsers,(topUsers) => ({ topUsers })
    );


export default function ActiveUsers() {
    const {topUsers} = useSelector(topUsersRetriever);
    return (
    <div className={"active-users-frame"}>
       <Container>
         <Stack className={"main"}>
            <Box className={"category-title"}>Active Users</Box>
            <Stack className={"cards-frame"}>
                <CssVarsProvider>
                    {topUsers.length !== 0 ? (
                    topUsers.map((member: Member) => {
                        const imagePath = `${serverApi}/${member.memberImage}`;
                        return (
                            <Card 
                            key={member._id} 
                            variant="outlined" 
                            className={"card"}>
                                <CardOverflow>
                                    <AspectRatio ratio="1">
                                        <img src={imagePath} alt=""/>
                                    </AspectRatio>
                                </CardOverflow>
                                <CardOverflow variant="soft" className="product-detail">
                                    <Stack className="info">
                                        <Stack flexDirection={"row"}>
                                            <Typography className={"title"}>
                                                {member.memberNick}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </CardOverflow>
                            </Card>
                        );
                    })
                    ) : (
                        <Box className="no-data"> No Active Users!</Box>
                    )}
                </CssVarsProvider>
            </Stack>
         </Stack>
        </Container>        
    </div>
    );
} 
