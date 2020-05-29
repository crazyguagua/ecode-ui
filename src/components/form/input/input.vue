<template>
    <div class="eocde-inputWrapper" :class="[type ==='textarea'? 'ecode-textarea' : 'ecode-input',{error,[`ecode-input-${size}`]:size}]" @mouseover="hovering =true"
        @mouseout="hovering =false">

        <template v-if="type !== 'textarea'">
            <!-- 前缀图标 -->
            <span class="ecode-input-prefix">
                <span class="ecode-input-prefix-inner">
                    <e-icon v-if="prefixIcon" :name="prefixIcon || ''" @mousedown.prevent />
                </span>
            </span>
            <!-- 前置内容 -->
            <template v-if="$slots.prefixIcon">
                <span class="ecode-input-pre-slot">
                    <slot name="prefixIcon"></slot>
                </span>
            </template>

            <input class="ecode-input-inner"
                :class="[(showSuffixIcon || $slots.suffixIcon) ? 'padding_r':'',(showPrefixIcon || $slots.prefixIcon)?'padding_l':'']"
                :type="showPassword ?(pswVisible ?'text':'password'): type" ref="input" @change="onChange"
                @focus="onfocus" @blur="onblur" @input="onInput" :readonly="readonly" :disabled="disabled"
                v-bind="$attrs" />
            <!-- 后置图标 inner -->
            <span class="ecode-input-suffix" v-if="showSuffixIcon">
                <span class="ecode-input-suffix-inner">
                    <e-icon v-if="suffixIcon" :name="suffixIcon || ''" @mousedown.prevent />
                    <e-icon v-if="showClear" name="ecode-Fail" @mousedown.prevent @click.native="clear" />
                    <e-icon v-if="showPswVisible" name="ecode-show-password" @mousedown.prevent
                        @click.native="handleShowPsw" />
                </span>
            </span>
            <!-- 后置内容 inner -->
            <template v-if="$slots.suffixIcon">
                <span class="ecode-input-suf-slot">
                    <slot name="suffixIcon"></slot>
                </span>
            </template>
        </template>

        <template v-if="type === 'textarea'">
            <textarea class="ecode-textarea-inner" ref="textarea" :style="textareaAutoHeightStyle" @change="onChange"
                @input="onInput" :disabled="disabled" v-bind="$attrs"></textarea>
        </template>
        <!-- 长度限制显示区域 -->
        <span class="input-count" v-if="isWordLimitVisible">
            <span class="input-count-inner">{{`${textLength}/${limitLength}`}}</span>
        </span>
        <!-- error -->
        <div class="message" v-if="error">
            <e-icon name="ecode-Fail" /> <span>{{error}}</span>
        </div>
    </div>
</template>

<script>
    import EIcon from '@/components/icon/icon'
    import calcTextareaHeight from './calcTextareaHeight';
    export default {
        name: 'ecode-input',
        components: {
            EIcon
        },
        props: {
            value: String,
            error: String,
            warning: String,
            disabled: Boolean,
            readonly: Boolean,
            type: {
                type: String,
                default: 'text'
            },
            size: {
                type: String,
                default: 'default'
            },
            clearable: {
                type: Boolean,
                default: false
            },
            showPassword: {
                type: Boolean,
                default: false
            },
            suffixIcon: {
                type: String,
                default: ''
            },
            prefixIcon: {
                type: String,
                default: ''
            },
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            showWordLimit: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.setNativeInputValue()
            this.resizeTextArea()
        },
        data() {
            return {
                hovering: false,
                focusing: false,
                pswVisible: false,
                textareaAutoHeightStyle: {}
            }
        },
        computed: {
            nativeInputValue() {
                return this.value === null || this.value === undefined ? '' : String(this.value)
            },
            showClear() {
                return this.clearable && this.nativeInputValue && (this.focusing || this.hovering) && !this.readonly &&
                    !this.disabled
            },
            showPswVisible() {
                return this.showPassword && !this.readonly && !this.disabled && (this.nativeInputValue || this.focusing)
            },
            showSuffixIcon() {
                return this.suffixIcon || this.showPassword || this.clearable 
            },
            showPrefixIcon() {
                return this.prefixIcon
            },
            isWordLimitVisible() {
                return this.showWordLimit && this.$attrs.maxlength && !this.readonly && !this.disabled && (this.type === 'text' || this.type === 'textarea')
            },
            limitLength() {
                return this.$attrs.maxlength
            },
            textLength() {
                if(typeof this.value === 'number') {
                    return String(this.value).length
                }
                return (this.value || '').length
            }
        },
        methods: {
            getInput() {
                return this.$refs.input || this.$refs.textarea
            },
            focused() {
                this.getInput().focus()
            },
            setNativeInputValue() {
                let input = this.getInput()
                if (!input) return
                if (input.value === this.nativeInputValue) return
                input.value = this.nativeInputValue
            },
            onChange(ev) {
                this.$emit('change', ev.target.value)
            },
            onInput(ev) {
                if (ev.target.value === this.nativeInputValue) return
                this.$emit('input', ev.target.value);
            },
            onfocus(ev) {
                this.focusing = true
            },
            onblur(ev) {
                this.focusing = false
            },
            clear(ev) {
                this.$emit('input', '')
                this.$emit('change', '')
                this.$emit('clear')
            },
            handleShowPsw() {
                this.pswVisible = !this.pswVisible
                this.$nextTick(() => {
                    this.focused()
                })
            },
            resizeTextArea() {
                const {
                    type,
                    autosize
                } = this
                if (type !== 'textarea') return
                if (!autosize) {
                    this.textareaAutoHeightStyle = {
                        minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
                    }
                    return
                }
                const maxRows = autosize.maxRows
                const minRows = autosize.minRows
                this.textareaAutoHeightStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
            }
        },
        watch: {
            nativeInputValue() {
                this.setNativeInputValue()
            },
            value() {
                this.$nextTick(() => {
                    this.resizeTextArea()
                })
            }
        }
    }
</script>