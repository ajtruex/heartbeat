<template>
    <div>
        <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
        <form v-if="!loading" @keyup.enter="save">
            <v-card class="pa-2 elevation-0"></v-card>
            <v-card-title>
                Remote
            </v-card-title>
            <v-card-text>
                <v-text-field
                    prepend-icon="visibility" label="Alias" suffix=" " autofocus v-model="remote.alias"
                ></v-text-field>
                <v-text-field
                    prepend-icon="cloud" label="http://" suffix=" " :value="remote.uri | hideProtocol" @input="val => remote.uri = val"
                ></v-text-field>
                <v-text-field
                    prepend-icon="timer" label="Interval" suffix="s" v-model="remote.interval"
                ></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat @click="cancel">Cancel</v-btn>
                <v-btn class="secondary" @click="save">Save</v-btn>
            </v-card-actions>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      remote: {
        alias: "",
        uri: "",
        interval: 10
      }
    };
  },
  created() {
    this.loading = false;
    let id = this.$route.params.id;
    if (id) {
      this.remote = { ...this.$store.getters.remote(id) };
    }
  },
  methods: {
    cancel() {
      this.$router.push({
        path: "/"
      });
    },
    save() {
      this.$store.commit("saveRemote", this.remote);
      this.$router.push({
        path: "/"
      });
    }
  },
  filters: {
    hideProtocol(value = "") {
      return value.replace("http://", "");
    }
  }
};
</script>

<style>
</style>
