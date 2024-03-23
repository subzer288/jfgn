<template>
    <v-container class="d-flex align-center justify-center">
        <v-row>
            <v-col>
                <v-card>
                    <v-row>
                        <v-col cols="auto">
                            <v-avatar class="mx-4 mt-4" rounded="0" size="74" >
                                <v-img src="https://media.licdn.com/dms/image/C4D03AQGHlvNACY7Jvw/profile-displayphoto-shrink_400_400/0/1668103824943?e=1716422400&v=beta&t=ID9WS44jzVYl3AQ3WHYGztBXbtUClQWwiUaQwIn9o9o"></v-img>
                            </v-avatar>
                        </v-col>

                        <v-container fluid>
                            <v-row class="mx-4 my-4">
                                <v-col lg="2" md="2" cols="12">Details</v-col>
                                
                                <v-divider
                                    class="border-opacity-25"
                                    color="info"
                                    inset
                                    vertical
                                ></v-divider>
                                
                                <v-col lg="10" md="10" cols="12">
                                    
                                    <div class="px-4 pt-4">
                                        <h6 class="mb-0 text-h6 text-typo">PROFILE</h6>
                                    </div>
                                    <div class="px-4 py-4">
                                        <p class="text-sm font-weight-light text-body">Passionated software developer that always wanted to improve his coding skills solving problems ans studying algorithms</p>
                                    </div>

                                    <v-divider
                                    class="border-opacity-25"
                                    ></v-divider>
                                    
                                    <div class="px-4 pt-4">
                                        <h6 class="mb-0 text-h6 text-typo">EMPLOYMENT HISTORY</h6>
                                    </div>
                                    <v-list lines="two">
                                        <v-list-item
                                            v-for="n in 3"
                                            :key="n"
                                            :title="'Item ' + n"
                                            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                                        ></v-list-item>
                                    </v-list>

                                    <v-divider
                                    class="border-opacity-25"
                                    ></v-divider>

                                    <div class="px-4 pt-4">
                                        <h6 class="mb-0 text-h6 text-typo">EDUCATION</h6>
                                    </div>
                                    <v-list lines="two">
                                        <v-list-item
                                            v-for="n in 3"
                                            :key="n"
                                            :title="'Item ' + n"
                                            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                                        ></v-list-item>
                                    </v-list>

                                    <div class="px-4 pt-4">
                                        <h6 class="mb-0 text-h6 text-typo">COURSES</h6>
                                    </div>
                                    <v-list lines="two">
                                        <v-list-item
                                            v-for="n in 3"
                                            :key="n"
                                            :title="'Item ' + n"
                                            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                                        ></v-list-item>
                                    </v-list>

                                </v-col>

                                
                            </v-row>
                        </v-container>
                    </v-row>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>