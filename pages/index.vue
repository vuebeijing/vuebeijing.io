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
      <c-heading as="h3" :font-size="['lg', 'lg', 'xl']" font-weight="light">
        Join our next meetup!
      </c-heading>
      <div>
        <c-text>Topic-1:安昭玮, Agora高级工程师</c-text>
        <c-heading as="h1" :font-size="['2rem', '2rem', '3rem']">
          如何为开源项目贡献代码
        </c-heading>
        <c-text>   Topic-2:徐英楠 清秋</c-text>
        <c-heading as="h1" :font-size="['2rem', '2rem', '3rem']">
          Workshop: 开发“一起看电影”网站
        </c-heading>
      </div>
      <c-stack spacing="4" color="yellow.300">
        <c-flex>
          <c-icon size="24px" mr="2" name="calendar-alt" />
          <c-text>
            Sunday, 4th July, 2021 <br> 2021年07月04日，周日
          </c-text>
        </c-flex>
        <c-flex>
          <c-icon size="24px" mr="2" name="clock" />
          <c-text>
            1:30pm - 5:45pm
          </c-text>
        </c-flex>
        <c-flex>
          <c-icon size="24px" mr="2" name="map-pin" />
          <c-text>
            北京中关村e世界财富中心A座P2（星巴克入口旁边进入大厦电梯B2层）
          </c-text>
        </c-flex>
      </c-stack>
      <c-button
        as="a"
        target="_blank"
        variant-color="red"
        mt="6"
        size="lg"
        href="https://www.huodongxing.com/event/9603800427400"
      >
        Register now • 立即报名
      </c-button>
    </c-stack>

    <c-flex align="center" size="360px" justify="space-between">
      <c-flex align="flex-end">
        <c-box>
          <c-image
            rounded="full"
            flex-shrink="0"
            :src="require('@/assets/avatar.png')"

            mx="auto"
          />
          <c-box
            max-w="300px"
            font-weight="bold"
            font-size="2xl"
            mx="auto"
            text-align="center"
          >
            <c-text>
              徐英楠 清秋
            </c-text>
            <!-- <c-text>
          <c-icon size="24px" mr="2" name="email" /> --
        </c-text> -->
            <c-text color="gray.50" font-size="md" font-weight="light">
              •
            </c-text>
            <!-- <c-text mt="5" color="gray.50" font-size="md" font-weight="light">
          UI Engineer & Co-founder at Akkadu, Creator of Chakra UI Vue
        </c-text> -->
            <c-text font-size="md" color="gray.50" font-weight="light">
              -
            </c-text>
          </c-box>
        </c-box>
        <!-- </c-stack> -->
      </c-flex>
      <c-flex size="100px" />
      <c-flex align="center" justify="center">
        <!-- <c-stack flex-shrink="0" mx="auto"> -->
        <c-box>
          <c-image
            rounded="full"
            flex-shrink="0"
            :src="require('@/assets/avatar_1.png')"

            mx="auto"
          />
          <c-box
            max-w="300px"
            font-weight="bold"
            font-size="2xl"
            mx="auto"
            text-align="center"
          >
            <c-text>
              安昭玮
            </c-text>
            <!-- <c-text>
          <c-icon size="24px" mr="2" name="email" /> --
        </c-text> -->
            <c-text color="gray.50" font-size="md" font-weight="light">
              •
            </c-text>
            <!-- <c-text mt="5" color="gray.50" font-size="md" font-weight="light">
          UI Engineer & Co-founder at Akkadu, Creator of Chakra UI Vue
        </c-text> -->
            <c-text font-size="md" color="gray.50" font-weight="light">
              Agora高级工程师
            </c-text>
          </c-box>
          <!-- </c-stack> -->
        </c-box>
      </c-flex>
    </c-flex>
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
      This Month
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
