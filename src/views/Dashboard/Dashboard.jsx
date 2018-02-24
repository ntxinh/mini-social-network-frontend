import React from 'react';
import {
    withStyles, Grid, InputLabel
} from 'material-ui';
import {
    ContentCopy, Store, InfoOutline, Warning, DateRange, LocalOffer, Update, ArrowUpward, AccessTime, Accessibility
} from 'material-ui-icons';
import PropTypes from 'prop-types';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';

import {
    StatsCard, ChartCard, TasksCard, RegularCard, Table, ItemGrid, ProfileCard, Button, CustomInput
} from 'components';

import {
    dailySalesChart ,
    emailsSubscriptionChart,
    completedTasksChart
} from 'variables/charts';

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
                            <Button color="primary" round>Follow</Button>
                        }
                    />
                </ItemGrid>
                {/* Body */}
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        content={
                            <div>
                                <Grid container>
                                    <ItemGrid xs={12} sm={12} md={6}>

                                    <RegularCard
                                            cardTitle="Intro"
                                            content={
                                                <div>
                                                    <Grid container>
                                                        <ItemGrid xs={12} sm={12} md={5}>
                                                            <CustomInput
                                                                labelText="Company (disabled)"
                                                                id="company-disabled"
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                                inputProps={{
                                                                    disabled: true
                                                                }}
                                                            />
                                                        </ItemGrid>
                                                        <ItemGrid xs={12} sm={12} md={3}>
                                                            <CustomInput
                                                                labelText="Username"
                                                                id="username"
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                            />
                                                        </ItemGrid>
                                                        <ItemGrid xs={12} sm={12} md={4}>
                                                            <CustomInput
                                                                labelText="Email address"
                                                                id="email-address"
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                            />
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
                                                        <ItemGrid xs={12} sm={12} md={5}>
                                                            <CustomInput
                                                                labelText="Company (disabled)"
                                                                id="company-disabled"
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                                inputProps={{
                                                                    disabled: true
                                                                }}
                                                            />
                                                        </ItemGrid>
                                                        <ItemGrid xs={12} sm={12} md={3}>
                                                            <CustomInput
                                                                labelText="Username"
                                                                id="username"
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                            />
                                                        </ItemGrid>
                                                        <ItemGrid xs={12} sm={12} md={4}>
                                                            <CustomInput
                                                                labelText="Email address"
                                                                id="email-address"
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
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
                                                        <ItemGrid xs={12} sm={12} md={5}>
                                                            <CustomInput
                                                                labelText="Company (disabled)"
                                                                id="company-disabled"
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                                inputProps={{
                                                                    disabled: true
                                                                }}
                                                            />
                                                        </ItemGrid>
                                                        <ItemGrid xs={12} sm={12} md={3}>
                                                            <CustomInput
                                                                labelText="Username"
                                                                id="username"
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                            />
                                                        </ItemGrid>
                                                        <ItemGrid xs={12} sm={12} md={4}>
                                                            <CustomInput
                                                                labelText="Email address"
                                                                id="email-address"
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                            />
                                                        </ItemGrid>
                                                    </Grid>
                                                </div>
                                            }
                                            footer={
                                                <Button color="primary">Update Profile</Button>
                                            }
                                        />

                                        <RegularCard
                                            cardTitle="Post 1"
                                            content={
                                                <div>
                                                    <Grid container>
                                                        <ItemGrid xs={12} sm={12} md={5}>
                                                            <CustomInput
                                                                labelText="Company (disabled)"
                                                                id="company-disabled"
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                                inputProps={{
                                                                    disabled: true
                                                                }}
                                                            />
                                                        </ItemGrid>
                                                        <ItemGrid xs={12} sm={12} md={3}>
                                                            <CustomInput
                                                                labelText="Username"
                                                                id="username"
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                            />
                                                        </ItemGrid>
                                                        <ItemGrid xs={12} sm={12} md={4}>
                                                            <CustomInput
                                                                labelText="Email address"
                                                                id="email-address"
                                                                formControlProps={{
                                                                    fullWidth: true
                                                                }}
                                                            />
                                                        </ItemGrid>
                                                    </Grid>
                                                </div>
                                            }
                                        />

                                    </ItemGrid>
                                </Grid>
                            </div>
                        }
                    />
                </ItemGrid>
            </Grid>
        </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
