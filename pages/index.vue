<template>
  <c-flex
    min-h="calc(100vh - 70px)"
    bg-image="url(https://res.cloudinary.com/xtellar/image/upload/v1603438175/VueBeijng/beijing-illustration_uzf9va.png)"
    bg-pos="center"
    :bg-size="['cover', 'cover', 'contain']"
    bg-repeat="no-repeat"
    pos="relative"
    color="yellow.300"
    :px="[8, 8, 24]"
    align="center"
    h="full"
    py="10"
    :direction="['column', 'column', 'row']"
  >
    <c-stack color="white" :max-w="['auto', 'auto', '50vw']" :my="[8, 8, 0]" spacing="5">
      <c-heading as="h3" :font-size="['lg', 'lg', 'xl']" font-weight="light">Join our next meetup!</c-heading>
      <div>
        <c-heading as="h1" :font-size="['2rem', '2rem', '4rem']">
          Using Vite with Vue 3
        </c-heading>
        <c-heading as="h1" :font-size="['2rem', '2rem', '4rem']">
          在 Vite 上使用 Vue 3
        </c-heading>
      </div>
      <c-stack spacing="4" color="yellow.300">
        <c-flex>
          <c-icon size="24px" mr="2" name="calendar-alt" />
          <c-text>
            Sunday, October 25th, 2020 <br> 2020年10月25日，周日
          </c-text>
        </c-flex>
        <c-flex>
          <c-icon size="24px" mr="2" name="clock" />
          <c-text>
            3:00PM - 5:00PM
          </c-text>
        </c-flex>
        <c-flex>
          <c-icon size="24px" mr="2" name="map-pin" />
          <c-text>
            北京市海淀区海淀大街甲36号439号中关村创业大街-12号楼 INNOPLANET
          </c-text>
        </c-flex>
      </c-stack>
      <c-button
        as="a"
        target="_blank"
        variant-color="red"
        mt="6"
        size="lg"
        href="http://hdxu.cn/zjsVY"
      >
        Register now • 立即报名
      </c-button>
    </c-stack>
    <c-stack flex-shrink="0" mx="auto">
      <c-image flex-shrink="0" :src="require('@/assets/me-circle.png')" w="250px" mx="auto" h="250px" />
      <c-box
        max-w="300px"
        font-weight="bold"
        font-size="2xl"
        mx="auto"
        text-align="center"
      >
        <c-text>
          乔纳森
        </c-text>
        <c-text>
          Jonathan Bakebwa
        </c-text>
        <c-text color="gray.50" font-size="md" font-weight="light">
          •
        </c-text>
        <!-- <c-text mt="5" color="gray.50" font-size="md" font-weight="light">
          UI Engineer & Co-founder at Akkadu, Creator of Chakra UI Vue
        </c-text> -->
        <c-text font-size="md" color="gray.50" font-weight="light">
          Akkadu的联合创始人/ UI工程师，Chakra UI Vue的创建者，Vue北京见面的联合创始人
        </c-text>
      </c-box>
    </c-stack>
    <!-- <c-dark-mode> -->
      <c-badge
        pos="absolute"
        :top="4"
        :left="[undefined, undefined, '100px']"
        :right="[28, 28, undefined]"
        variant-color="yellow"
        :font-size="['lg', 'lg', '1.5em']"
        text-align="center"
      >
        TODAY • 今天
      </c-badge>
    <!-- </c-dark-mode> -->
  </c-flex>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    daysLeft () {
      const now = new Date(Date.now())
      const eventdate = new Date('10/25/2020')
      const timeDiff = eventdate.getTime() - now.getTime()
      const daysDiff = timeDiff / (1000 * 3600 * 24)
      return Math.ceil(daysDiff)
    }
  }
}
</script>
