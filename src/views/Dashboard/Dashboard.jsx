import React from 'react';
import {
    withStyles, Grid, InputLabel
} from 'material-ui';
import {
    ContentCopy, InfoOutline, Warning, LocalOffer
} from 'material-ui-icons';
import PropTypes from 'prop-types';

import {
    StatsCard, RegularCard, ItemGrid, ProfileCard, Button, CustomInput
} from 'components';

import { dashboardStyle } from 'variables/styles';

import avatar from 'assets/img/faces/marc.jpg';

class Dashboard extends React.Component{
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    render(){
        return (
            <div>
            <Grid container>
                {/* Avatar & Cover */}
                <ItemGrid xs={12} sm={12} md={12}>
                    <ProfileCard
                        avatar={avatar}
                        subtitle="CEO / CO-FOUNDER"
                        title="Alec Thompson"
                        description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                        footer={
                            <Button color="primary" round>Add Friend</Button>
                        }
                    />
                </ItemGrid>
                {/* Body */}

                <Grid container>
                    <ItemGrid xs={12} sm={12} md={6}>

                        <RegularCard
                            cardTitle="Intro"
                            content={
                                <div>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>Quote: </InputLabel>
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>Studied at: </InputLabel>
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>Lives in: </InputLabel>
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>Single: </InputLabel>
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>Followed by: </InputLabel>
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>GitHub: </InputLabel>
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>LinkedIn: </InputLabel>
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>Twitter: </InputLabel>
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>Website: </InputLabel>
                                        </ItemGrid>
                                    </Grid>
                                </div>
                            }
                        />

                        <RegularCard
                            cardTitle="Friends"
                            content={
                                <div>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={4}>
                                            <StatsCard
                                                icon={ContentCopy}
                                                iconColor="orange"
                                                title="Used Space"
                                                description="49/50"
                                                statIcon={Warning}
                                                statText="Tracked from Github"
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={4}>
                                            <StatsCard
                                                icon={InfoOutline}
                                                iconColor="red"
                                                title="Fixed Issues"
                                                description="75"
                                                statIcon={LocalOffer}
                                                statText="Tracked from Github"
                                            />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={4}>
                                            <StatsCard
                                                icon={ContentCopy}
                                                iconColor="orange"
                                                title="Used Space"
                                                description="49/50"
                                                statIcon={Warning}
                                                statText="Tracked from Github"
                                            />
                                        </ItemGrid>
                                    </Grid>
                                </div>
                            }
                        />

                    </ItemGrid>

                    <ItemGrid xs={12} sm={12} md={6}>

                        <RegularCard
                            cardTitle="Make Post"
                            content={
                                <div>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <CustomInput
                                                labelText="What's on your mind?"
                                                id="company-disabled"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    disabled: true
                                                }}
                                            />
                                        </ItemGrid>
                                    </Grid>
                                </div>
                            }
                            footer={
                                <Button color="primary">Post</Button>
                            }
                        />

                        <RegularCard
                            cardTitle="Alec Thompson - Feb/12/2018"
                            content={
                                <div>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>This is my second post!</InputLabel>
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <Button color="primary">Like</Button>
                                            <Button color="primary">Comment</Button>
                                        </ItemGrid>
                                    </Grid>
                                </div>
                            }
                        />

                        <RegularCard
                            cardTitle="Alec Thompson - Feb/10/2018"
                            content={
                                <div>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>This is my first post!</InputLabel>
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={12}>
                                            <Button color="primary">Like</Button>
                                            <Button color="primary">Comment</Button>
                                        </ItemGrid>
                                    </Grid>
                                </div>
                            }
                        />

                    </ItemGrid>
                </Grid>

            </Grid>
        </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
