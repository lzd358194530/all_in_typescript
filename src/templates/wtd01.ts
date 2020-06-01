/**
 * @description wtd01 填空
 *
 * 题干：
 * 包含音频、图片、文案
 * 文案字数限制：待定
 * 如果有音频
 * 显示音频播放按钮
 * 音频会自动播放一次
 * 点击音频播放按钮可以切换音频的播放/暂停
 * 每次播放音频都是整个音频重新播放
 *
 * 题目：
 * 单词中缺失部分字母，每个空格对应一个字母或字母组合（1~4个字符）
 * 不论实际缺少了几个字母，每个空格的长度，都以本题字符长度最大的空格为准
 * 如果题目中包含space（例如 ice cream）：对space显示做空位处理
 *
 * 选项：
 * 文案内容，字数限制：1~4个字符
 * 选项数量1~8个，选项和空格一一对应，没有干扰项
 *
 *
 * 作答区域出现和题目空格数量对应的选项，选项顺序打乱
 * 题目里处于选中状态的空格为当前要作答的空格：
 * 默认从第一个空格处于选中状态，选择一个选项后，选项进入选中的空格，选中状态默认推移到下一个没有选项的空格，以此类推
 * 用户也可以点击空格，将此空格手动置位选中状态；如果此空格中已经有选项，选项会被取消
 * 全部空格填完后，可以点击【确定】按钮
 * 如果答题正确，给出答题正确的提示，之后自动进入下一步流程
 * 如果答题错误，给出正确答案，并出现【下一步】按钮，点击进入下一步流程
 * 有未填选项的空格时，【确定】按钮置灰，不可点击
 * 如果选项内容相同，可以选择任何一个作为正确选项
 *
 * 细节: 
 */