<template>
  <div>
    <div class="content">
      <div class="container-fluid">
        <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div
          class="
            _1adminOverveiw_table_recent
            _box_shadow
            _border_radious
            _mar_b30
            _p20
          "
        >
          <p class="_title0">
            Tags
            <Button @click="addTagModal = true"
              >Add Tag <Icon type="ios-add"
            /></Button>
          </p>

          <div class="_overflow _table_div">
            <table class="_table">
              <!-- TABLE TITLE -->
              <tr>
                <th>ID</th>
                <th>Tag Name</th>
                <th>Create at</th>
                <th>Action</th>
              </tr>
              <!-- TABLE TITLE -->

              <!-- ITEMS -->
              <tr v-for="(tag, i) in tags" :key="i" v-if="tags.length">
                <td>{{ tag.id }}</td>
                <td class="_table_name">
                  {{ tag.tagName }}
                </td>
                <td>{{ tag.create_at }}</td>
                <td>
                  <Button type="info" size="small">Edit</Button>

                  <Button type="error" size="small">Delete</Button>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <!-- Tag adding Modal -->
        <Modal
          v-model="addTagModal"
          title="Add Tags"
          :mask-closable="false"
          :closable="false"
        >
          <Input v-model="data.tagName" placeholder="Add Tag name..." />

          <div slot="footer">
            <Button type="default" @click="addTagModal = false">Close</Button>
            <Button
              type="default"
              @click="addTag"
              :disabled="isAdding"
              :loading="isAdding"
              >{{ isAdding ? "Adding ..." : "Add Tag" }}</Button
            >
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        tagName: "",
      },
      addTagModal: false,
      isAdding: false,
      tags: [],
    };
  },
  methods: {
    async addTag() {
      if (this.data.tagName.trim() == "") return this.e("Tag Name is required");

      const res = await this.callApi("post", "app/create_tag", this.data);
      if (res.status === 201) {
        this.s("Tag has been added successfully!");
        this.addTagModal = false;
      } else {
        this.swr();
      }
    },
    async created() {
      const res = await this.callApi("get", "app/get_tags");
      if (res.status == 200) {
        this.tags = res.data;
      } else {
        this.swr();
      }
    },
  },
};
</script>
