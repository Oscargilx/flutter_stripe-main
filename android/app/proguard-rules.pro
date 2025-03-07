# 🛡️ Stripe SDK Rules (Prevents issues with obfuscation)
-dontwarn com.stripe.android.pushProvisioning.PushProvisioningActivity$g
-dontwarn com.stripe.android.pushProvisioning.PushProvisioningActivityStarter$Args
-dontwarn com.stripe.android.pushProvisioning.PushProvisioningActivityStarter$Error
-dontwarn com.stripe.android.pushProvisioning.PushProvisioningActivityStarter
-dontwarn com.stripe.android.pushProvisioning.PushProvisioningEphemeralKeyProvider

# 🛡️ Flutter-Specific Rules
-keep class io.flutter.** { *; }
-keep class com.example.** { *; }
-keep class androidx.lifecycle.DefaultLifecycleObserver

# 🛡️ Prevent issues with Gson serialization/deserialization
-keepattributes Signature
-keep class sun.misc.Unsafe { *; }
-keep class com.google.gson.** { *; }
-keep class com.fasterxml.jackson.** { *; }
-keep class org.simpleframework.xml.** { *; }

# 🛡️ Keep Parcelable classes from being obfuscated (Fixes issues with Flutter plugins)
-keep class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator *;
}

# 🛡️ Keep all Flutter plugin classes (Prevents "ClassNotFoundException")
-keep class io.flutter.plugins.** { *; }
-keep class com.google.firebase.** { *; }
-keep class com.google.android.gms.** { *; }
-keep class androidx.core.** { *; }

# 🛡️ Keep Retrofit & OkHttp classes (Fixes API communication issues)
-keepattributes *Annotation*
-keep class com.squareup.okhttp3.** { *; }
-keep class retrofit2.** { *; }

# 🛡️ Keep all ViewBinding and DataBinding classes (Prevents UI crashes)
-keep class * extends androidx.databinding.ViewDataBinding { *; }
-keep class * extends androidx.viewbinding.ViewBinding { *; }

# 🛡️ Prevent obfuscation of enums (Prevents crashes related to enums)
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

# 🛡️ Keep Activity and Fragment classes (Fixes issues with deep linking and navigation)
-keep class * extends android.app.Activity { *; }
-keep class * extends androidx.fragment.app.Fragment { *; }

# 🛡️ Google Play Services (Prevents Firebase & Google Pay issues)
-keep class com.google.android.gms.** { *; }
-keep class com.google.firebase.** { *; }
-keep class com.google.android.material.** { *; }

# 🛡️ Prevent R8/ProGuard from stripping Stripe SDK classes
-dontwarn com.stripe.**
-keep class com.stripe.android.** { *; }

# 🛡️ Prevent issues with Kotlin reflection
-keep class kotlin.Metadata { *; }
-keep class kotlin.jvm.internal.** { *; }
