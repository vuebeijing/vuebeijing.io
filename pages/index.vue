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
    :py="[4, 4, 10]"
    :direction="['column', 'column', 'row']"
  >
    <c-flex justify="center">
      <c-box
        text-align="center"
        bg="yellow.900"
        px="6"
        py="4"
        rounded="lg"
        :position="['relative', 'relative', 'absolute']"
        :left="['unset', 'unset', '50%']"
        :top="['unset', 'unset', 0]"
        :transform="['unset', 'unset', 'translateX(-50%)']"
      >
        <client-only>
          <vue-countdown v-slot="{ days, hours, minutes, seconds }" :time="timeDiff">
            <c-stack align="center" text-transform="uppercase">
              <c-text font-size="sm">
                Next meetup ⏰
              </c-text>
              <c-stack is-inline>
                <c-box>
                  <c-heading text-align="center">
                    {{ days }}
                  </c-heading>
                  <c-text :font-size="['0.7em', '0.7em', '1.5em']">
                    Days
                  </c-text>
                </c-box>
                <c-box as="span">
                  :
                </c-box>
                <c-box>
                  <c-heading text-align="center">
                    {{ hours }}
                  </c-heading>
                  <c-text :font-size="['0.7em', '0.7em', '1.5em']">
                    Hours
                  </c-text>
                </c-box>
                <c-box as="span">
                  :
                </c-box>
                <c-box>
                  <c-heading text-align="center">
                    {{ minutes }}
                  </c-heading>
                  <c-text :font-size="['0.7em', '0.7em', '1.5em']">
                    Minutes
                  </c-text>
                </c-box>
                <c-box as="span">
                  :
                </c-box>
                <c-box>
                  <c-heading text-align="center">
                    {{ seconds }}
                  </c-heading>
                  <c-text :font-size="['0.7em', '0.7em', '1.5em']">
                    Seconds
                  </c-text>
                </c-box>
              </c-stack>
            </c-stack>
          </vue-countdown>
        </client-only>
      </c-box>
    </c-flex>
    <c-stack my="4" flex-shrink="0" :mx="['auto', 'auto', '100px']">
      <c-image
        rounded="full"
        flex-shrink="0"
        src="https://res.cloudinary.com/xtellar/image/upload/v1631854218/VueBeijng/1Iw_Mvud_400x400_nhkgz4.jpg"
        w="150px"
        mx="auto"
        h="150px"
      />
      <c-box
        max-w="300px"
        font-weight="bold"
        font-size="2xl"
        mx="auto"
        text-align="center"
      >
        <c-text>
          Sébastien Chopin
        </c-text>
        <c-text color="gray.50" font-size="md" font-weight="light">
          •
        </c-text>
        <c-text font-size="md" color="gray.50" font-weight="light">
          Nuxt Labs 首席执行官 • Nuxt.js 核心团队
        </c-text>
        <c-text font-size="md" color="gray.50" font-weight="light">
          CEO, Nuxt Labs • Nuxt.js Core Team
        </c-text>
      </c-box>
    </c-stack>
    <c-stack color="white" :max-w="['auto', 'auto', '50vw']" :my="[4, 4, 0]" spacing="5">
      <div>
        <c-heading as="h1" :font-size="['2rem', '2rem', '2.5rem']">
          Nuxt 3 之旅 • The Journey to Nuxt 3
        </c-heading>
      </div>
      <c-stack spacing="4" color="yellow.300">
        <c-flex font-weight="bold" font-size="lg">
          <c-icon size="24px" mr="2" name="calendar-alt" />
          <c-text>
            Sunday, September 26th, 2021 • 2021年09月26日，周日
          </c-text>
        </c-flex>
        <c-flex font-weight="bold" font-size="lg">
          <c-icon size="24px" mr="2" name="clock" />
          <c-text>
            7:00PM - 9:00PM
          </c-text>
        </c-flex>
        <c-flex font-weight="bold" font-size="lg">
          <c-icon size="24px" mr="2" name="map-pin" />
          <c-text>
            ONLINE ZOOM VIDEO CONFERENCE | 在线ZOOM视频会议
          </c-text>
        </c-flex>
      </c-stack>
      <c-button
        as="a"
        target="_blank"
        variant-color="red"
        mt="6"
        size="lg"
        align-self="flex-start"
        :py="[4, 4, 10]"
        :px="[6, 6, 10]"
        :font-size="['lg', 'lg', '2xl']"
        href="http://hdxu.cn/D9oun"
      >
        Register now • 立即报名
      </c-button>
    </c-stack>
  </c-flex>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'
export default {
  name: 'Home',
  components: {
    VueCountdown
  },
  computed: {
    timeDiff: (vm) => {
      const now = new Date(Date.now())
      const eventdate = new Date('09/26/2021')
      const timeDiff = eventdate.getTime() - now.getTime()
      return timeDiff
    },
    daysLeft () {
      const daysDiff = this.timeDiff / (1000 * 3600 * 24)
      return Math.ceil(daysDiff)
    }
  }
}
</script>
