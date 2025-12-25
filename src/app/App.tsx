import { motion } from "motion/react";
import { Github, Linkedin, Mail, Link as LinkIcon, Sparkles } from "lucide-react";
import { PortfolioCard } from "./components/PortfolioCard";

export default function App() {
  const portfolioItems = [
    {
      title: "个人主页",
      description: "个人链接合集，包含各平台账号信息",
      link: "https://vlink.cc/hr619phk",
      color: "from-cyan-500 to-blue-500",
      imageUrl: "https://images.unsplash.com/photo-1760074016396-dde74286c65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZmlsZSUyMGxpbmtzfGVufDF8fHx8MTc2NjY1ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "专辑合集 01",
      description: "精选作品集 - 设计与创意系列",
      link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzYzMjMwODYwNg==&action=getalbum&album_id=4286723840665042944#wechat_redirect",
      color: "from-purple-500 to-pink-500",
      imageUrl: "https://images.unsplash.com/photo-1624901344246-8759f305fef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMGFydHxlbnwxfHx8fDE3NjY2NDg0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "专辑合集 02",
      description: "精选作品集 - 技术与分享系列",
      link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzYzMjMwODYwNg==&action=getalbum&album_id=4286352055746543630#wechat_redirect",
      color: "from-orange-500 to-red-500",
      imageUrl: "https://images.unsplash.com/photo-1595623654300-b27329804025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kaW5nfGVufDF8fHx8MTc2NjYyNzU2NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "专辑合集 03",
      description: "精选作品集 - 思考与洞察系列",
      link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzYzMjMwODYwNg==&action=getalbum&album_id=4288121910149627924#wechat_redirect",
      color: "from-green-500 to-emerald-500",
      imageUrl: "https://images.unsplash.com/photo-1758151843774-613922a8dff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGlua2luZyUyMG1pbmRzZXR8ZW58MXx8fHwxNzY2NjU4MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "专辑合集 04",
      description: "精选作品集 - 项目与实践系列",
      link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzYzMjMwODYwNg==&action=getalbum&album_id=4284048873561374731#wechat_redirect",
      color: "from-indigo-500 to-purple-500",
      imageUrl: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY2NjU4MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "专辑合集 05",
      description: "精选作品集 - 学习与成长系列",
      link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzYzMjMwODYwNg==&action=getalbum&album_id=4285511147924865046#wechat_redirect",
      color: "from-pink-500 to-rose-500",
      imageUrl: "https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjY2NTgyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "专辑合集 06",
      description: "精选作品集 - 工具与效率系列",
      link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzYzMjMwODYwNg==&action=getalbum&album_id=4282580578140274699#wechat_redirect",
      color: "from-yellow-500 to-orange-500",
      imageUrl: "https://images.unsplash.com/photo-1652177217044-4f62dacf0ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2NTk1Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "专辑合集 07",
      description: "精选作品集 - 观点与评论系列",
      link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzYzMjMwODYwNg==&action=getalbum&album_id=4282581636933599242#wechat_redirect",
      color: "from-teal-500 to-cyan-500",
      imageUrl: "https://images.unsplash.com/photo-1632858265907-961f1454ccf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNjdXNzaW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3NjY2NTgyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "专辑合集 08",
      description: "精选作品集 - 案例与分析系列",
      link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzYzMjMwODYwNg==&action=getalbum&album_id=4282580044792578061#wechat_redirect",
      color: "from-violet-500 to-fuchsia-500",
      imageUrl: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzY2NjQyMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "专辑合集 09",
      description: "精选作品集 - 灵感与创意系列",
      link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzYzMjMwODYwNg==&action=getalbum&album_id=4283505957197692933#wechat_redirect",
      color: "from-blue-500 to-indigo-500",
      imageUrl: "https://images.unsplash.com/photo-1647517091946-3a804f06c9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnNwaXJhdGlvbiUyMGxpZ2h0YnVsYnxlbnwxfHx8fDE3NjY2NTgyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="dark min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative px-6 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
                <span className="flex items-center gap-2 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent text-sm md:text-base">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  赵天兵 · 创作作品集
                </span>
              </div>
            </motion.div>
            
            {/* Main title with gradient and language switch animation */}
            <motion.h1
              key="title"
              animate={{ 
                opacity: [1, 1, 0.3, 0.3, 1, 1],
                y: [0, 0, -5, -5, 0, 0],
                scale: [1, 1, 0.98, 0.98, 1, 1],
              }}
              transition={{ 
                duration: 10,
                times: [0, 0.3, 0.4, 0.6, 0.7, 1],
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-5 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold relative"
              style={{
                textShadow: "0 0 40px rgba(168, 85, 247, 0.4), 0 0 80px rgba(236, 72, 153, 0.2)",
                filter: "drop-shadow(0 4px 20px rgba(168, 85, 247, 0.3))"
              }}
            >
              <motion.span
                animate={{
                  opacity: [1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
                }}
                transition={{
                  duration: 10,
                  times: [0, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 1],
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                创作者的数字空间
              </motion.span>
              <motion.span
                animate={{
                  opacity: [0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
                }}
                transition={{
                  duration: 10,
                  times: [0, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 1],
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block absolute left-1/2 -translate-x-1/2 top-0"
              >
                Creative Digital Space
              </motion.span>
            </motion.h1>
            
            {/* Subtitle with glow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 text-gray-400 max-w-xl mx-auto leading-relaxed"
            >
              汇集微信公众号创作内容，包括设计思考、技术分享、项目实践等系列专辑
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <a
                href="https://vlink.cc/hr619phk"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-xl overflow-hidden"
              >
                {/* 多层背景效果 */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* 光晕效果 - 呼吸动画 */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 blur-2xl"
                  animate={{
                    opacity: [0.6, 0.9, 0.6],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* 玻璃高光 */}
                <motion.div 
                  className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent"
                  animate={{
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* 底部阴影 */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* 边框光效 - 呼吸动画 */}
                <motion.div 
                  className="absolute inset-0 rounded-xl ring-1 ring-white/30"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* 内容 */}
                <motion.div
                  className="relative z-10 flex items-center gap-2"
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="w-5 h-5 text-white drop-shadow-lg" />
                  <span className="text-white font-medium drop-shadow-lg">全部账号 & 联系方式</span>
                  <motion.div
                    animate={{
                      x: [0, 3, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-1 h-1 rounded-full bg-white/80 shadow-lg shadow-white/50" />
                  </motion.div>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-6 py-12 md:py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            公众号专辑
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            探索微信公众号内容合集，每个专辑都是独特的主题系列
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
              color={item.color}
              index={index}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="mb-2 text-white">© 2024 个人作品集</p>
              <p className="text-gray-500">
                持续创作，分享价值
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl border border-white/20 hover:border-purple-500/50 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all" />
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white relative z-10 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl border border-white/20 hover:border-blue-500/50 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all" />
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white relative z-10 transition-colors" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl border border-white/20 hover:border-orange-500/50 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all" />
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white relative z-10 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}