class Timer {
    countdown(end, update, handle) {
        const now = new Date().getTime()
        const self = this
        if (now - end) {
            handle.call(self)
        } else {
            let last_time = end - now
            const PX_D = 1000 * 60 * 60 * 24
            const PX_H = 1000 * 60 * 60
            const PX_M = 1000 * 60
            const PX_S = 1000

            let d = Math.trunc(last_time / PX_D)
            let h = Math.trunc((last_time - d * PX_D) / PX_H)
            let m = Math.trunc((last_time - d * PX_D - h * PX_H) / PX_M)
            let s = Math.trunc((last_time - d * PX_D - h * PX_H - m * PX_M) / PX_S)

            let r = []
            if (d > 0) {
                r.push(`<em>${d}</em>天`)
            }
            if (r.length || (h > 0)) {
                r.push(`<em>${h}</em>时`)
            }
            if (r.length || (m > 0)) {
                r.push(`<em>${m}</em>分`)
            }
            if (r.length || (s > 0)) {
                r.push(`<em>${s}</em>秒`)
            }

            self.last_time = r.join('')
            update.call(self, r.join(''))
            setTimeout(() => {
                self.countdown(end, update, handle)
            }, 1000)
        }
    }
}